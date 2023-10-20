import { icons } from 'lucide-react-native';


const Icon = ({ name, size,focused,color }) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={`${focused ? "text-LogoBlue" : color}`} size={size} />;
};

export default Icon;