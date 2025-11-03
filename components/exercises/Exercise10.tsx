import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface Student {
  id: string;
  name: string;
  age: string;
  grade: string;
}

type RootStackParamList = {
  StudentList: undefined;
  StudentDetail: { student: Student };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StudentListScreen({ navigation }: any) {
  const [students, setStudents] = useState<Student[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newStudent, setNewStudent] = useState<Student>({
    id: '',
    name: '',
    age: '',
    grade: '',
  });

  const addStudent = () => {
    if (newStudent.name && newStudent.age && newStudent.grade) {
      setStudents([
        ...students,
        { ...newStudent, id: Date.now().toString() },
      ]);
      setModalVisible(false);
      setNewStudent({ id: '', name: '', age: '', grade: '' });
    }
  };

  const renderItem = ({ item }: { item: Student }) => (
    <TouchableOpacity
      style={styles.studentItem}
      onPress={() => navigation.navigate('StudentDetail', { student: item })}
    >
      <Text style={styles.studentName}>{item.name}</Text>
      <Text style={styles.studentInfo}>Tuổi: {item.age}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Thêm sinh viên mới</Text>
      </TouchableOpacity>

      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Tên"
              value={newStudent.name}
              onChangeText={(text) =>
                setNewStudent({ ...newStudent, name: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Tuổi"
              value={newStudent.age}
              keyboardType="numeric"
              onChangeText={(text) =>
                setNewStudent({ ...newStudent, age: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Lớp"
              value={newStudent.grade}
              onChangeText={(text) =>
                setNewStudent({ ...newStudent, grade: text })
              }
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={addStudent}
              >
                <Text style={styles.modalButtonText}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function StudentDetailScreen({ route }: any) {
  const { student } = route.params;

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{student.name}</Text>
      <View style={styles.detailInfo}>
        <Text style={styles.detailText}>Tuổi: {student.age}</Text>
        <Text style={styles.detailText}>Lớp: {student.grade}</Text>
      </View>
    </View>
  );
}

export default function Exercise10() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StudentList"
        component={StudentListScreen}
        options={{ title: 'Danh sách sinh viên' }}
      />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetailScreen}
        options={{ title: 'Thông tin sinh viên' }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  studentItem: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  studentInfo: {
    fontSize: 14,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#ff3b30',
  },
  saveButton: {
    backgroundColor: '#007AFF',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailInfo: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 5,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
});