// import 'package:charts_flutter/flutter.dart' as charts;
// import 'package:flutter/material.dart';

// class SimpleBarChart extends StatelessWidget {
//   final List<charts.Series> seriesList;
//   final bool animate;

//   SimpleBarChart(this.seriesList, {required this.animate});

//   /// Creates a [BarChart] with sample data and no transition.
//   factory SimpleBarChart.withSampleData() {
//     return new SimpleBarChart(
//       _createSampleData(),
//       // Disable animations for image tests.
//       animate: false,
//     );
//   }

//   @override
//   Widget build(BuildContext context) {
//     return new charts.BarChart(
//       seriesList,
//       animate: animate,
//     );
//   }

//   /// Create one series with sample hard coded data.
//   static List<charts.Series<BarChartModel, String>> _createSampleData() {
//     final data = [
//       BarChartModel(
//         productId: "1",
//         name: "Laptop HP 14 pulgadas 16Gb ram",
//         description: "Laptop HP 14 pulgadas",
//         price: 500.41,
//         discount: 0,
//         category: "Tecnología",
//         itemsSold: 19,
//         color: charts.ColorUtil.fromDartColor(Colors.lightBlueAccent),
//       ),
//       BarChartModel(
//         productId: "3",
//         name: "Convierte tu tv en un smart con un Chromecast",
//         description: "Chromecast",
//         price: 15.55,
//         discount: 20,
//         category: "Tecnología",
//         itemsSold: 11,
//         color: charts.ColorUtil.fromDartColor(Colors.green),
//       ),
//       BarChartModel(
//         productId: "2",
//         name: "Laptop Dell 14 pulgadas 8GB ram",
//         description: "Laptop Dell",
//         price: 720.01,
//         discount: 15,
//         category: "Tecnología",
//         itemsSold: 4,
//         color: charts.ColorUtil.fromDartColor(Colors.yellow),
//       ),
//       BarChartModel(
//         productId: "4",
//         name: "Mueble grande para toda la familia",
//         description: "Mueble de lujo",
//         price: 120,
//         discount: 50,
//         category: "Inmuebles",
//         itemsSold: 1,
//         color: charts.ColorUtil.fromDartColor(Colors.pink),
//       ),
//     ];

//     return [
//       new charts.Series<BarChartModel, String>(
//           id: "Financial",
//           data: data,
//           domainFn: (BarChartModel series, _) => series.category,
//           measureFn: (BarChartModel series, _) => series.itemsSold,
//           colorFn: (BarChartModel series, _) => series.color),
//     ];
//   }
// }

// /// Sample ordinal data type.
// class BarChartModel {
//   String productId;
//   String name;
//   String description;
//   double price;
//   double discount;
//   String category;
//   int itemsSold;
//   final charts.Color color;

//   BarChartModel({
//     required this.productId,
//     required this.name,
//     required this.description,
//     required this.price,
//     required this.discount,
//     required this.category,
//     required this.itemsSold,
//     required this.color,
//   });
// }
