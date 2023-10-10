import { icons } from 'lucide-react-native';


const Icon = ({ name, size,focused }) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={`${focused ? "text-black" : "text-gray-500"}`} size={size} />;
};

export default Icon;