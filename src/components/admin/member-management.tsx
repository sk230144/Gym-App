"use client";

import { useState, useMemo, type FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpDown,
  MoreHorizontal,
  PlusCircle,
  Search,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { initialMembers, type Member } from "@/lib/data";
import { cn } from "@/lib/utils";

const addMemberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  monthsPaid: z.coerce.number().int().min(0, "Months must be a positive number."),
  paymentStatus: z.enum(["Paid", "Unpaid"]),
});

type SortKey = keyof Member;

const MemberManagement: FC = () => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Paid" | "Unpaid">(
    "all"
  );
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: "asc" | "desc";
  } | null>({ key: "name", direction: "asc" });
  const [isAddMemberOpen, setAddMemberOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof addMemberSchema>>({
    resolver: zodResolver(addMemberSchema),
    defaultValues: {
      name: "",
      monthsPaid: 1,
      paymentStatus: "Paid",
    },
  });

  const sortedAndFilteredMembers = useMemo(() => {
    let filtered = members.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (member) => member.paymentStatus === statusFilter
      );
    }

    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [members, searchTerm, statusFilter, sortConfig]);

  const requestSort = (key: SortKey) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleToggleStatus = (id: string) => {
    setMembers(
      members.map((member) =>
        member.id === id
          ? {
              ...member,
              paymentStatus:
                member.paymentStatus === "Paid" ? "Unpaid" : "Paid",
            }
          : member
      )
    );
    toast({ title: "Status updated successfully." });
  };
  
  const handleDeleteMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id));
    toast({ title: "Member removed.", variant: "destructive" });
  };

  const handleAddMonth = (id: string) => {
    setMembers(
        members.map((member) =>
          member.id === id
            ? {
                ...member,
                monthsPaid: member.monthsPaid + 1,
              }
            : member
        )
      );
  }

  const handleSubtractMonth = (id: string) => {
    setMembers(
        members.map((member) =>
          member.id === id && member.monthsPaid > 0
            ? {
                ...member,
                monthsPaid: member.monthsPaid - 1,
              }
            : member
        )
      );
  }

  function onSubmit(values: z.infer<typeof addMemberSchema>) {
    const newMember: Member = {
      id: `usr${Math.random().toString(16).slice(2)}`,
      name: values.name,
      joinDate: new Date().toISOString().split("T")[0],
      paymentStatus: values.paymentStatus,
      monthsPaid: values.monthsPaid,
    };
    setMembers([newMember, ...members]);
    toast({ title: "Member added successfully!" });
    form.reset();
    setAddMemberOpen(false);
  }

  const SortableHeader: FC<{ sortKey: SortKey; children: React.ReactNode, className?: string }> = ({ sortKey, children, className }) => (
    <TableHead className={cn("cursor-pointer hover:bg-muted/50", className)} onClick={() => requestSort(sortKey)}>
        <div className="flex items-center gap-2">
            {children}
            {sortConfig?.key === sortKey && <ArrowUpDown className="h-4 w-4" />}
        </div>
    </TableHead>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Filter by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Paid">Paid</SelectItem>
              <SelectItem value="Unpaid">Unpaid</SelectItem>
            </SelectContent>
          </Select>

          <Dialog open={isAddMemberOpen} onOpenChange={setAddMemberOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="font-headline">Add New Member</DialogTitle>
                <DialogDescription>
                  Enter the details for the new member.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="monthsPaid"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Months Paid</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="paymentStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Paid">Paid</SelectItem>
                            <SelectItem value="Unpaid">Unpaid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit">Add Member</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <SortableHeader sortKey="name">Name</SortableHeader>
              <SortableHeader sortKey="joinDate">Join Date</SortableHeader>
              <SortableHeader sortKey="paymentStatus" className="text-center">Status</SortableHeader>
              <SortableHeader sortKey="monthsPaid" className="text-center">Months Paid</SortableHeader>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAndFilteredMembers.length > 0 ? (
              sortedAndFilteredMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>
                    {new Date(member.joinDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        member.paymentStatus === "Paid"
                          ? "default"
                          : "destructive"
                      }
                      className={member.paymentStatus === 'Paid' ? 'bg-green-500 hover:bg-green-600' : ''}
                    >
                      {member.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">{member.monthsPaid}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleToggleStatus(member.id)}>
                          Toggle Status
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAddMonth(member.id)}>Add Month</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleSubtractMonth(member.id)} disabled={member.monthsPaid === 0}>Subtract Month</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteMember(member.id)}
                          className="text-red-600"
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-24 text-center"
                >
                  No members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MemberManagement;
