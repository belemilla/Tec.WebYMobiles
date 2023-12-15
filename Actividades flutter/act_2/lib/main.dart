import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Act2',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Sedes Universidad de Los Lagos'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const SizedBox(
                height: 20), /
            _buildCard(
              image:
                  'assets/images/sedeosorno.jpg', 
              description: 'Ulagos Sede Osorno',
            ),
            // Tarjeta 2
            _buildCard(
              image:
                  'assets/images/sedepto.jpeg', 
              description: 'Ulagos Sede Puerto Montt',
            ),
            // Tarjeta 3
            _buildCard(
              image:
                  'assets/images/sedecastro.jpeg', 
              description: 'Ulagos Sede Chiloé',
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ElevatedButton(
            onPressed: _launchUlagosURL,
            child: const Text('Más información'),
          ),
        ),
      ),
    );
  }

  Widget _buildCard({required String image, required String description}) {
    return Card(
      child: Column(
        children: [
          Image.asset(
            image,
            height: 140, 
            width: double.infinity, 
            fit: BoxFit.cover, 
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(description),
          ),
        ],
      ),
    );
  }

  void _launchUlagosURL() async {
    const url = 'https://www.ulagos.cl/';
    try {
      
      if (await canLaunch(url)) {
        
        await launch(url);
      } else {
        
        print('No se puede abrir la URL');
      }
    } catch (e) {
      
      print('Error al abrir la URL: $e');
    }
  }
}