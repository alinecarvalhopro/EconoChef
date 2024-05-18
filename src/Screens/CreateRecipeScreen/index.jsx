import React, { useState } from 'react';

import { ScrollView, Text, View, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button/index.jsx';
import Checkbox from '../../components/Checkbox/index.jsx';
import IngredientCreateCard from '../../components/IngredientCreateCard/index.jsx';

import CreateRecipeImage from '../../images/svg/SVGCreateRecipeImage';
import SVGIngredientIcon from '../../images/svg/Icons/SVGIngredientIcon';
import SVGListIcon from '../../images/svg/Icons/SVGListIcon';

const CreateRecipeScreen = () => {
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
  ]);
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    includeOliveOil: false,
    includeVegetableOil: false,
    includeSalt: true,
    includeBlackPepper: true,
  });

  const navigation = useNavigation();

  const handleAddIngredient = () => {
    if (quantity && name) {
      const newIngredient = {
        quantity: quantity,
        name: name,
      };

      const updatedIngredients = [...ingredients, newIngredient];

      setIngredients(updatedIngredients);

      setQuantity('');
      setName('');
    }
    Keyboard.dismiss();
  };

  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const toggleCheckbox = (key) => {
    setCheckboxes({
      ...checkboxes,
      [key]: !checkboxes[key],
    });
  };

  return (
    <View className="flex flex-1 bg-bg px-[20px] py-[60px]">
      <ScrollView className="flex gap-[30px]">
        <CreateRecipeImage />

        <View className="flex border border-primaryColor p-[20px] rounded-[4px]">
          <View className="flex flex-row items-center pb-[20px]">
            <View className="mr-[8px]">
              <SVGIngredientIcon />
            </View>
            <Text className="text-[22px] text-primaryColor font-jostSemibold">
              Ingredientes
            </Text>
          </View>
          <Input
            label="Nome"
            placeholder="Ex: Cenoura"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Quantidade"
            placeholder="Ex: 200g... 1kg... 200ml..."
            value={quantity}
            onChangeText={setQuantity}
          />
          <Button
            onPress={handleAddIngredient}
            title="Incluir ingrediente"
            textStyles="text-bg font-jostSemibold text-[18px]"
            buttonStyles="bg-secondaryColor w-[100%] h-[46px] flex items-center justify-center rounded-[4px]"
          />
        </View>

        <View className="flex border border-primaryColor p-[20px] rounded-[4px]">
          <View className="flex flex-row items-center pb-[20px]">
            <View className="mr-[8px]">
              <SVGListIcon />
            </View>
            <Text className="text-[22px] text-primaryColor font-jostSemibold">
              Lista de ingredientes
            </Text>
          </View>

          <View>
            {ingredients.map((ingredient, index) => (
              <IngredientCreateCard
                key={index}
                quantity={ingredient.quantity}
                name={ingredient.name}
                onDelete={() => handleDeleteIngredient(index)}
              />
            ))}
          </View>

          <View className="bg-primaryColor h-[1px] mb-[20px]" />

          <View>
            <Checkbox
              text="Incluir azeite"
              isChecked={checkboxes.includeOliveOil}
              handleCheckboxToggle={() => toggleCheckbox('includeOliveOil')}
            />
            <Checkbox
              text="Incluir óleo vegetal"
              isChecked={checkboxes.includeVegetableOil}
              handleCheckboxToggle={() => toggleCheckbox('includeVegetableOil')}
            />
            <Checkbox
              text="Incluir sal"
              isChecked={checkboxes.includeSalt}
              handleCheckboxToggle={() => toggleCheckbox('includeSalt')}
            />
            <Checkbox
              text="Incluir pimenta do reino"
              isChecked={checkboxes.includeBlackPepper}
              handleCheckboxToggle={() => toggleCheckbox('includeBlackPepper')}
            />
          </View>

          <Button
            onPress={() => navigation.navigate('MyRecipeScreen')}
            title="Criar receita"
            textStyles="text-bg font-jostSemibold text-[18px]"
            buttonStyles="bg-secondaryColor w-[100%] h-[46px] flex items-center justify-center rounded-[4px]"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateRecipeScreen;
