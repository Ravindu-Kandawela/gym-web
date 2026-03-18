
import { services } from '../../constants/constant';
import { Card } from '../../components/ui/card';
import { SectionHeader } from '../../components/ui/SectionHeader';
import servicesBg from '../../assets/Macthing_to_this_color_pallate_2k_delpmaspu.png';

export const Services = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden" id="services">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />

      {/* Content */}
      <div className="relative z-10">
        <SectionHeader 
          title="Elite Services"
          description="Everything you need to reach your fitness goals, from beginner to professional levels."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              delay={index * 0.1}
              className="group p-8 border-b-4 border-transparent hover:border-[#D4A017] !bg-[#333333]/80 backdrop-blur-sm !border-[#3D3322] hover:!border-[#D4A017]"
            >
              <div className="w-12 h-12 bg-[#D4A017]/15 rounded flex items-center justify-center mb-6 group-hover:bg-[#D4A017] transition-colors">
                <div className="text-[#D4A017] group-hover:text-[#080808]">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#F0EBE3]">{service.title}</h3>
              <p className="text-[#F0EBE3]/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
