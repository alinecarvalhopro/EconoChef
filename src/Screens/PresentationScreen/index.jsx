import { SafeAreaView, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button/index.jsx';

import SVGChefHatIcon from '../../images/svg/Icons/SVGChefHatIcon';

const PresentationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-start justify-center gap-[30px] bg-bg px-[20px]">
      <View className="flex flex-row items-center">
        <View className="mr-[8px]">
          <SVGChefHatIcon />
        </View>
        <Text className="text-[22px] text-primaryColor font-jostSemibold">
          Olá Chef!
        </Text>
      </View>
      <Text className="text-[22px] text-primaryColor font-jostRegular">
        Agora ficou simples criar receitas com os ingredientes que você tem em
        mãos.
      </Text>
      <Text className="text-[22px] text-primaryColor font-jostRegular">
        Evite desperdícios, economize dinheiro ou até mesmo faça desafios
        utilizando o <Text className="font-jostSemibold">Econo Chef!</Text>
      </Text>
      <Text className="text-[22px] text-primaryColor font-jostRegular">
        Vamos começar?
      </Text>
      <View className="w-[100%] pr-[40px]">
        <Button
          onPress={() => navigation.navigate('CreateRecipeScreen')}
          title="Clique aqui para começar"
          textStyles="text-bg font-jostSemibold text-[20px]"
          buttonStyles="bg-secondaryColor w-[100%] h-[46px] flex items-center justify-center rounded-[4px]"
        />
      </View>
    </SafeAreaView>
  );
};

export default PresentationScreen;
