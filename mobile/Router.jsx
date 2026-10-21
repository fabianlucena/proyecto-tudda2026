import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './screens/Login';
import About from './screens/About';

const Drawer = createDrawerNavigator();

export default function Router() {
  return <Drawer.Navigator>
    <Drawer.Screen name="Login" component={Login} options={{ title: 'Iniciar sesión' }} />
    <Drawer.Screen name="About" component={About} options={{ title: 'Acerca de' }} />
  </Drawer.Navigator>;
}