import MemberManagement from "@/components/admin/member-management";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-headline font-bold mb-8 text-center text-primary">Admin Dashboard</h1>
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Member Management</CardTitle>
                <CardDescription>View, add, and manage gym members and their payment status.</CardDescription>
            </CardHeader>
            <CardContent>
                <MemberManagement />
            </CardContent>
        </Card>
    </div>
  );
}
