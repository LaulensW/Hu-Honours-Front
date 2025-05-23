import LevelHeader from "@/components/ui/LevelHeader";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import LevelSvg from "@/components/svgs/LevelSvg";
import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useRouter } from "expo-router";
import LevelSvg2 from "@/components/svgs/LevelSvg2";
import UploadFile from "@/components/svgs/UploadFileSvg";
import UploadFileSvg2 from "@/components/svgs/UploadFileSvg2";
import LottieView from "lottie-react-native";
import Checklist from "@/components/ui/Checklist";
import FormBottomNavigation from "@/components/ui/FormBottomNavigation";
import { StatusBar } from "expo-status-bar";

const Level4Screen = () => {
  const router = useRouter();
  const animation = require("../../assets/lottie/badge-animation.json");
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const handleCheck = (index: number) => {
    setCheckedItems((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const { step, steps, currentStepIndex, next, back, isLastStep } =
    useMultiStepForm([
      <View
        key={0}
        className="bg-orange items-center rounded-3xl p-5 w-full gap-y-5 flex-col"
      >
        <View className="w-full justify-center items-center">
          <Text className="color-white font-bold text-3xl">Level 4</Text>
          <Text className="color-white">Lees deze korte uitleg</Text>
        </View>

        <View className="w-full">
          <Text className="color-white w-1/2 text-lg">
            De cirkel van betrokkenheid bevat alles waar jij je mee bezighoudt,
            zoals werk, studie, nieuws of sociale situaties.
          </Text>
        </View>

        <View className="flex-row justify-between w-full items-center">
          <LevelSvg />
          <Text className="color-white w-1/2 text-lg">
            De cirkel van invloed bevat de dingen waar je écht invloed op hebt,
            zoals je gedrag, reacties en keuzes.
          </Text>
        </View>

        <View className="w-full justify-center items-center">
          <Text className="color-white text-lg">
            “Succesvolle mensen focussen zich op hun cirkel van invloed en
            verspillen minder energie aan dingen waar ze geen controle over
            hebben.”
          </Text>
        </View>
      </View>,
      <View key={1} className="bg-[#EE5B39] rounded-3xl px-5 pt-32 w-full">
        <View className="absolute -top-4 -right-4 z-10">
          <LevelSvg2 />
        </View>
        <View className="w-full space-y-4">
          <Text className="text-3xl font-bold text-white">Uitdaging 1</Text>
          <Checklist
            checkedItems={checkedItems}
            items={[
              "1. Teken twee cirkels op een vel papier",
              "2. Schrijf tijdens de dag steekwoorden op in de juiste cirkel",
            ]}
            onCheck={handleCheck}
            checkedColor="bg-orange"
          />
        </View>
      </View>,
      <View key={2} className="flex-1">
        <View className="flex-row bg-[#EE5B39] h-[200] justify-around items-center p-5 mb-5 rounded-3xl">
          <View className="flex h-full justify-center">
            <Text className="text-3xl font-bold color-white pb-2">Upload</Text>
            <Text className="color-white w-3/4 pt-2">
              Upload een foto van jouw cirkel
            </Text>
          </View>
          <View>
            <UploadFile />
          </View>
        </View>
        <View className="flex h-[200] justify-center items-center bg-[#464646] mt-5 rounded-3xl border-dashed border-white border-2">
          <UploadFileSvg2 />
          <Text className="text-white mt-5">Upload hier</Text>
        </View>
      </View>,
      <View key={3} className="flex-1 h-full justify-center items-center">
        <View className="overflow-clip w-[250] h-[250] justify-center items-center">
          <LottieView
            source={animation}
            autoPlay={true}
            loop={true}
            resizeMode="contain"
            style={{
              width: 600,
              aspectRatio: 1,
            }}
          />
        </View>
        <Text className="text-white text-3xl font-bold mb-3">
          Lekker bezig!
        </Text>
        <Text className="text-white">Klaar voor het volgende level?</Text>
      </View>,
    ]);
  return (
    <SafeAreaView className="flex-1 pt-[40] px-[20] bg-[#333333]">
      <View className="w-full flex-1 bg-[#333333]">
        <LevelHeader
          levelName="Challenge 1"
          levelDescription="Level 4: cirkel van betrokkenheid"
          barProgression={currentStepIndex / steps.length}
          handleBackPress={() => {
            router.replace("/(main)/dashboard");
          }}
        />
        {step}
        <View className="absolute bottom-0 left-0 right-0 flex-row w-full gap-x-4 py-5 bg-[#333333]">
          <FormBottomNavigation
            next={isLastStep ? () => router.replace("/(main)/dashboard") : next}
            back={back}
            isLastStep={isLastStep}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Level4Screen;
