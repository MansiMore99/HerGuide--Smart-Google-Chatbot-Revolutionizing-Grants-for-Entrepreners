import { Users, Target, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Connect & Network",
      description: "Connect with like-minded women entrepreneurs and expand your professional network."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Grow Your Business",
      description: "Access resources and tools designed to help your business thrive."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Community",
      description: "Join a worldwide community of successful women entrepreneurs."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;