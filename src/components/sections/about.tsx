const AboutSection = () => {
    return (
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">About FlexFit Gym</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Mission: To Inspire, Motivate, and Transform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-headline font-semibold text-primary">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, FlexFit Gym started as a small community-focused space with a big dream: to create a fitness environment that felt like a second home. We wanted a place free of judgment, where people of all fitness levels could feel supported and empowered.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we've grown into a state-of-the-art facility, but our core values remain the same. We believe in building a strong community, providing top-tier equipment, and offering expert guidance to help every member on their unique fitness journey.
              </p>
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-headline font-semibold text-primary">Why Choose Us?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  <span><strong>Expert Trainers:</strong> Certified professionals dedicated to your success.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  <span><strong>Modern Facilities:</strong> Top-of-the-line equipment for every workout need.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  <span><strong>Supportive Community:</strong> A welcoming and motivating environment for everyone.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✔</span>
                  <span><strong>Flexible Memberships:</strong> Plans designed to fit your lifestyle and budget.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  