import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, ScrollView, View } from "react-native";
import Level from "../../components/dashboard/Level";
import Divider from "../../components/dashboard/Divider";
import Notification from "../../components/dashboard/Notificatiebalk";
import Achievements from "../../components/dashboard/Achievementbalk";

const Dashboard = () => {
  const router = useRouter(); // Router gebruiken om te navigeren

  return (
    <SafeAreaView className="flex-1">
      <Achievements streak={5} badges={1}/>
      <Notification level={1}/>
      <ScrollView className="flex-col-reverse p-4">
        <Level level={3} titel="Level 3"/>
      <Divider challenge="Inleiding"/>
        <Level level={2} titel="Jouw verhaal in beeld"/>
        <Level level={1} titel="Eerste stappen"/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;