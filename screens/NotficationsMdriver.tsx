import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type NotificationType = 'System' | 'Promotion';

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  icon: string;
}

const notifications: Notification[] = [
  { id: '1', type: 'System', message: 'Your booking #1234 has been suc...', icon: 'checkmark-circle' },
  { id: '2', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!', icon: 'pricetag' },
  { id: '3', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!', icon: 'pricetag' },
  { id: '4', type: 'System', message: 'Your booking #1205 has been can...', icon: 'close-circle' },
  { id: '5', type: 'System', message: 'Thank you! Your transaction is com...', icon: 'wallet' },
  { id: '6', type: 'Promotion', message: 'Invite friends - Get 3 coupons each!', icon: 'pricetag' },
];

const NotificationItem = ({ item }: { item: Notification }) => (
  <View style={styles.notificationItem}>
    <View style={[styles.iconContainer, { backgroundColor: item.type === 'System' ? '#E8E8E8' : '#FFD700' }]}>
      <Ionicons 
        name={item.icon as any} 
        size={24} 
        color={item.type === 'System' ? (item.icon === 'checkmark-circle' ? '#4CAF50' : '#000') : '#000'} 
      />
    </View>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationType}>{item.type}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
    </View>
  </View>
);

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.trashButton}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.notificationList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:"15%"
  },
  header: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 8,
  },
  trashButton: {
    padding: 8,
  },
  notificationList: {
    paddingTop: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666666',
  },
});