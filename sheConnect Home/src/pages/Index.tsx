import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              Empowering Women Entrepreneurs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Connect, collaborate, and grow with a community of ambitious women entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
                Join Our Community
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Features />

      {/* Creator Attribution */}
<footer className="py-12 bg-gradient-to-r from-primary/5 to-primary-dark/5">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Larger Profile Image */}
      <img 
        src="/Mansi.jpg" 
        alt="Mansi More" 
        className="w-48 h-48 rounded-full border-8 border-primary shadow-xl"
      />
      <div className="text-center">
        <p className="text-2xl font-medium text-gray-700">Built by a Tech Girl</p>
        <h3 className="text-3xl font-bold text-primary">Mansi More</h3>
        <p className="text-lg text-gray-600 mt-2">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Index;