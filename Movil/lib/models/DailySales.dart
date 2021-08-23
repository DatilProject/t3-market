import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:admin/constants.dart' as constants;

Future<DailySales> fetchDailySales() async {
  final response = await http.get(Uri.parse(constants.dailySalesEndPoint));

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return DailySales.fromJson(json.decode(response.body)[0]);
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to fetch DailySales');
  }
}

class DailySales {
  final String title;
  final String date;
  final double sales;

  DailySales({
    required this.title,
    required this.date,
    required this.sales,
  });

  factory DailySales.fromJson(Map<String, dynamic> json) {
    return DailySales(
      title: "Ventas del día",
      date: json["date"],
      sales: json["sales"],
    );
  }
}
