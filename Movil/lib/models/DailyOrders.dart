import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:admin/constants.dart' as constants;

Future<DailyOrders> fetchDailyOrders() async {
  final response = await http.get(Uri.parse(constants.dailyOrdersEndPoint));

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return DailyOrders.fromJson(json.decode(response.body)[0]);
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to fetch DailySales');
  }
}

class DailyOrders {
  final String title;
  final String date;
  final String count;

  DailyOrders({
    required this.title,
    required this.date,
    required this.count,
  });

  factory DailyOrders.fromJson(Map<String, dynamic> json) {
    return DailyOrders(
      title: "Órdenes del día",
      date: json["date"],
      count: json["count"],
    );
  }
}
