import { SafeAreaView, Text } from 'react-native';

import Logo from '../../images/svg/SVGLogo'

const PresentationScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-bg">
      <Logo />
      <Text className="text-lg text-primaryColor font-jostSemibold">Testando navegação</Text>
    </SafeAreaView>
  );
};

export default PresentationScreen;
