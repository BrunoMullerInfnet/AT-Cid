import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GoHomeButton from './GoHomeButton';
import {useState, useEffect} from 'react'

const restaurants = [
  {
    id: '1',
    name: 'Restaurante Central',
    address: 'Rua Principal, 100, Centro',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3f/b1/d6/varanda-do-restaurante.jpg?w=600&h=-1&s=1',
    iframe: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3029.327935192872!2d-43.18551987304687!3d-22.898865999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurante%20Central!5e1!3m2!1spt-BR!2sbr!4v1734316533864!5m2!1spt-BR!2sbr" ,
  },
  {
    id: '2',
    name: 'Bistrô Gourmet',
    address: 'Rua da Paz, 45, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZWfQKY617WSmOfKWURcvLx8CToRpA9vkJQ&s',
    iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8568.182639568015!2d-43.18459530910549!3d-22.89966802934881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f3666243d%3A0x5b976891c5eb8e5d!2sBistr%C3%B4%20Ouvidor!5e1!3m2!1spt-BR!2sbr!4v1734316621782!5m2!1spt-BR!2sbr',
  },
  {
    id: '3',
    name: 'Churrascaria Pampa',
    address: 'Avenida Central, 200, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH4g5iS1lKIlsWVxTALF-USIzX7ckLZRclQ&s',
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.1325239303196!2d-43.1768798255143!3d-22.907614437899007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981e007143ee1%3A0xb1e70a94df780a7a!2sPampa%20Grill!5e1!3m2!1spt-BR!2sbr!4v1734316900732!5m2!1spt-BR!2sbr",
  },
  {
    id: '4',
    name: 'Sabor & Arte',
    address: 'Praça da Liberdade, 12, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uaRRpyalvj34iUkNYPxU76371EiGqLcOpA&s',
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7204.463101317872!2d-43.18455236040242!3d-22.908909170946835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f74785cdb61%3A0x9eddd7530ff0fe53!2sRestaurante%20Sabor%20e%20Arte!5e1!3m2!1spt-BR!2sbr!4v1734316982182!5m2!1spt-BR!2sbr",
  },
  {
    id: '5',
    name: 'Cantina Bella Itália',
    address: 'Rua das Flores, 78, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlocewNcXeXaydSoPQwRFAFW_vk5NsSCbCg&s',
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48465.752292810444!2d-43.21962816322593!3d-22.908644177324366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f478018d7cf%3A0xccfe955c51ee618!2sCantina%20Italiana%20Lu%20Ternanu!5e1!3m2!1spt-BR!2sbr!4v1734317092904!5m2!1spt-BR!2sbr",
  },
  {
    id: '6',
    name: 'Tropical Sucos',
    address: 'Rua do Comércio, 34, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_06nccnDtnVhoN8l1aX70Fx5AfFocagonA&s',
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96908.39557916927!2d-43.31068038940431!3d-22.940945901635846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f8cc58f4f27%3A0x8f4b46323e441423!2sTropical%20Sucos!5e1!3m2!1spt-BR!2sbr!4v1734317123547!5m2!1spt-BR!2sbr",
  },
  {
    id: '7',
    name: 'Empório do Sabor',
    address: 'Rua Nova, 56, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2ykmLw83xQuwUBL5FDIJSIuURARwqyAgMQ&s',
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96908.65238551213!2d-43.31068070993178!3d-22.94058717466019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff244047633%3A0x5b6d0de8c8481684!2zRW1ww7NyaW8gU2HDumRl!5e1!3m2!1spt-BR!2sbr!4v1734317156833!5m2!1spt-BR!2sbr",
  },
  {
    id: '8',
    name: 'Café Colonial',
    address: 'Avenida do Sol, 90, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUD7Tz5DnvLgfzCYeEHO9-oA86qjZze2VZRw&s',
    iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96908.90918828633!2d-43.31068103046012!3d-22.94022844736312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd44a0c42d423%3A0x277979f3e2ba2034!2sCaf%C3%A9%20do%20Alto!5e1!3m2!1spt-BR!2sbr!4v1734317203690!5m2!1spt-BR!2sbr",
  },
  {
    id: '9',
    name: 'Grill ExpressGrill Express',
    address: 'Rua do Mercado, 67, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXF7zeLCF1oODvoOsf1lpHEpyhJvBi4_occw&s',
    iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48460.14672258819!2d-43.246079269991235!3d-22.924320465383705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f00087941f5%3A0xcfbab393c54829aa!2sEXPRESS%20GRILL!5e1!3m2!1spt-BR!2sbr!4v1734317272506!5m2!1spt-BR!2sbr",
  },
  {
    id: '10',
    name: 'Pizzaria Napoli',
    address: 'Rua Verde, 88, Centro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGdCPrhM3lUcJHwzXseMkMKlHYoW6CGMgDQ&s',
    iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34266.46874338765!2d-43.24607922992712!3d-22.924437577865056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7f86a316e7%3A0xdf09ca27100ce85b!2sBento%20Pizzeria%20Napoletana!5e1!3m2!1spt-BR!2sbr!4v1734317241242!5m2!1spt-BR!2sbr",
  },
];
export default function MapScreen({ route }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { isDarkMode } = route.params || false;

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Restaurantes Parceiros</Text>

      {selectedRestaurant ? (
        <View style={styles.mapPlaceholder}>
          <iframe
            src={selectedRestaurant.iframe}
            style={styles.iframe}
            loading="lazy"
          />
        </View>
      ) : (
        <View style={[styles.mapPlaceholder, isDarkMode && styles.mapPlaceholderDark]}>
          <Text style={[styles.placeholderText, isDarkMode && styles.darkText]}>
            Selecione um restaurante para ver o mapa
          </Text>
        </View>
      )}

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedRestaurant(item)}>
            <View style={[styles.card, isDarkMode && styles.darkCard]}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <Text style={[styles.cardTitle, isDarkMode && styles.darkText]}>{item.name}</Text>
                <Text style={[styles.cardAddress, isDarkMode && styles.darkText]}>{item.address}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <GoHomeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  darkText: {
    color: 'white',
  },
  mapPlaceholder: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: 10,
  },
  mapPlaceholderDark: {
    backgroundColor: '#333', 
  },
  placeholderText: {
    fontSize: 18,
    color: '#6c757d',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 0,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  darkCard: {
    backgroundColor: '#555',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardAddress: {
    fontSize: 14,
    color: '#6c757d',
  },
});
