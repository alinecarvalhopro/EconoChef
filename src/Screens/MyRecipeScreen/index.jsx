import React, { useState } from 'react';

import { ScrollView, Text, View } from 'react-native';

// import Button from '../../components/Button/index.jsx';

import SVGMyRecipeImage from '../../images/svg/SVGMyRecipeImage.js';
import SVGRecipeIcon from '../../images/svg/Icons/SVGRecipeIcon.js';
import SVGFryingIcon from '../../images/svg/Icons/SVGFryingIcon.js';
import IngredientRecipeCard from '../../components/IngredientRecipeCard/index.jsx';
import SVGCutleryIcon from '../../images/svg/Icons/SVGCutleryIcon.js';

const MyRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([
    {
      quantity: '2',
      name: 'ovos',
    },
    {
      quantity: '200g',
      name: 'farinha de trigo',
    },
    {
      quantity: '200ml',
      name: 'leite',
    },
    {
      quantity: '1kg',
      name: 'batata',
    },
    ,
    {
      quantity: '100g',
      name: 'manteiga',
    },
    {
      quantity: 'gosto',
      name: 'sal',
    },
    {
      quantity: 'gosto',
      name: 'pimenta',
    },
  ]);
  const [recipeName, setRecipeName] = useState(
    'Gratinado de Batata com Molho Branco'
  );
  const [recipe, setRecipe] = useState(
    'Pré-aqueça o forno a 180°C. Cozinhe as batatas fatiadas em água com sal até ficarem levemente macias. Escorra e reserve. Para o molho branco, em uma panela, derreta a manteiga em fogo médio. Adicione a farinha e mexa constantemente até formar uma mistura homogênea. Gradualmente, adicione o leite à mistura, continuando a mexer para evitar a formação de grumos. Cozinhe até o molho engrossar. Tempere o molho branco com sal e pimenta a gosto. Reserve. Em uma tigela, bata os ovos. Disponha metade das batatas em um refratário untado. Despeje metade do molho branco sobre as batatas. Coloque a outra metade das batatas e cubra com o restante do molho branco. Despeje os ovos batidos sobre o molho branco, espalhando uniformemente. Leve ao forno pré-aquecido por aproximadamente 30-40 minutos, ou até que a parte superior esteja dourada e o gratinado esteja cozido. Retire do forno, deixe descansar por alguns minutos e sirva.'
  );

  return (
    <View className="flex flex-1 bg-bg pt-[60px]">
      <ScrollView className="flex gap-[30px] px-[20px]">
        <SVGMyRecipeImage />

        <View className="flex border border-primaryColor p-[20px] rounded-[4px]">
          <View className="flex flex-row items-center pb-[20px]">
            <View className="mr-[8px]">
              <SVGRecipeIcon />
            </View>
            <Text className="text-[22px] text-primaryColor font-jostSemibold">
              {recipeName}
            </Text>
          </View>

          <View className="bg-primaryColor h-[1px] mb-[20px]" />

          <View>
            {ingredients.map((ingredient, index) => (
              <IngredientRecipeCard
                key={index}
                quantity={ingredient.quantity}
                name={ingredient.name}
                onDelete={() => handleDeleteIngredient(index)}
              />
            ))}
          </View>

          <View className="bg-primaryColor h-[1px] mb-[20px]" />

          <View className="flex flex-row items-center pb-[20px]">
            <View className="mr-[8px]">
              <SVGFryingIcon />
            </View>
            <Text className="text-[22px] text-primaryColor font-jostSemibold">
              Preparo
            </Text>
          </View>

          <Text className="text-[20px] text-primaryColor font-jostRegular">
            {recipe}
          </Text>

          <View className="flex flex-row items-center mb-[10px] mt-[20px]">
            <View className="mr-[8px]">
              <SVGCutleryIcon />
            </View>
            <Text className="text-[22px] text-primaryColor font-jostSemibold">
              Bom apetite
            </Text>
          </View>
        </View>

        <View >
        {/* <Button
          title="Confirmar exclusão de receita"
          textStyles="text-bg font-jostSemibold text-[16px]"
          buttonStyles="bg-primaryColor w-[100%] h-[46px] flex items-center justify-center rounded-[4px]"
        /> */}
        </View>
      </ScrollView>

      <View className="w-[100%] h-[66px] bg-secondaryColor"></View>
    </View>
  );
};

export default MyRecipeScreen;
