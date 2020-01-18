import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "procuraDev"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil no Github"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#e4f9ff",
        headerStyle: {
          backgroundColor: "#fa163f"
        }
      }
    }
  )
);

export default Routes;
