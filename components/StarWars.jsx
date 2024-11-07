import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

function StarWars() {
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRecord(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>{record.name}</Text>
      <Text style={styles.field}>Height: {record.height}</Text>
      <Text style={styles.field}>Mass: {record.mass}</Text>
      <Text style={styles.field}>Hair Color: {record.hair_color}</Text>
      <Text style={styles.field}>Skin Color: {record.skin_color}</Text>
      <Text style={styles.field}>Eye Color: {record.eye_color}</Text>
      <Text style={styles.field}>Birth Year: {record.birth_year}</Text>
      <Text style={styles.field}>Gender: {record.gender}</Text>
      {/* Add more fields as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  field: {
    fontSize: 18,
    marginBottom: 5,
  },
  error: {
    color: "red",
    fontSize: 18,
  },
});

export default StarWars;
