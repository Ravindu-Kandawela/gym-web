import React from 'react';
import { Dumbbell, User, Users, Zap } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Membership', href: '#membership' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Contact', href: '#contact' },
];

export const services = [
  {
    title: 'Personal Training',
    description: 'One-on-one coaching sessions tailored specifically to your body type and fitness goals.',
    icon: <User className="w-6 h-6" />,
  },
  {
    title: 'Group Classes',
    description: 'High-energy sessions including HIIT, Yoga, and Spin with a motivating community.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Strength Training',
    description: 'Advanced racks, platform zones, and free weights for building pure explosive power.',
    icon: <Dumbbell className="w-6 h-6" />,
  },
  {
    title: 'Cardio Zone',
    description: 'Top-tier treadmills, rowers, and bikes equipped with performance tracking technology.',
    icon: <Zap className="w-6 h-6" />,
  },
];

export const plans = [
  {
    name: 'Basic',
    price: '29',
    features: [
      { text: 'Unlimited Gym Access', included: true },
      { text: 'Locker Room & Showers', included: true },
      { text: 'Free Group Classes', included: false },
      { text: 'Personal Trainer Session', included: false },
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '59',
    features: [
      { text: 'Unlimited Gym Access', included: true },
      { text: 'Locker Room & Showers', included: true },
      { text: 'All Group Classes', included: true },
      { text: '1 PT Session / Month', included: true },
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '99',
    features: [
      { text: '24/7 VIP Access', included: true },
      { text: 'Private Locker & Spa', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Weekly PT Sessions', included: true },
    ],
    popular: false,
  },
];

export const trainers = [
  {
    name: 'Marcus Thorne',
    specialty: 'Strength & Conditioning',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gWFTcI644Oqy35Pn3Yi7gQBc_pQFYci5TxowHkZrscp3Ua0GovfsBqqHNSFMCrglNt7CwQXVI04EHgCweATT0jBbZaY54kOXgTf135G3srKJafsc-RE7RI8cmmYb_oPHRInR_xsFMN_oPGOoE04_em3lw7dXx0YYgo1OwBmzAt8Lp0f0Ip_xJI_Gfn8qXmwf5_L2EAuRqzu1JkqVQ1LkaH_Irzpvx-wdOOOa5Hg-9xFNam_vDkVCuflIvVvRd6jVkJjhBGTBxN9D',
  },
  {
    name: 'Elena Rodriguez',
    specialty: 'Yoga & Mobility',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUaIr-t-ynaaHlcpEAM0kCkGuwescmo_rVfdUMLaj-vSpcGaVZsWeSWsIs7EMiCna5B57lM46twR1nBQoQAHqi5UFeluKNC608AioxBtT8R50dZnZCr1XW0_IzrR3NG5rl50AiwQGJItwlWzpXdv6zPUMs3beQGCQPSWBPk60dfWFHYt2omObb6On_huzJBIl5pC-UzxTE53vMFib-3c6fPzIrN3HKkLPkdKIVDWQOluS69BJeucAfg-zJZ-BV8dipRViiC-nQ2JrK',
  },
  {
    name: 'Jason Kade',
    specialty: 'HIIT Specialist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR0o7qkQu49YNlhGHgDFZFU32MhU_HGu5Egy0w_7M_Ij5CHHSuduzhde4zJpEtIK_ljkybkDzfZMd-cPsm_jbGdp1REMkPzQK94EBIs0QMSjtzlzv2jmtgvKI0T1E3ofpgBQV0MsTmu-5PYBZm18kvu95kIJoAi5LGHK4T-Hzpb3K7OvBQX0cTMHcQrYLHo1w5oA_WLtXwzx7ya9pHX8tcOrQdvkJlQK-cdzuQYvOIL7s1jvHwpvAxI1vUOnA-fZGQaV68szPG2FoF',
  },
];
