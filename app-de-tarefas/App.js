import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tarefas from './src/components/Tarefas';
import Form from './src/components/Form';
const Stack = createStackNavigator();
export default function App(){
return( 
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Tarefas" component={Tarefas} />
<Stack.Screen name="Formulario" component={Form} />
</Stack.Navigator>
</NavigationContainer>
)
}