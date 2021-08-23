import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:admin/constants.dart' as constants;

Future<DailyIncome> fetchDailyIncome() async {
  final response = await http.get(Uri.parse(constants.dailyIncomeEndPoint));

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return DailyIncome.fromJson(json.decode(response.body)[0]);
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to fetch DailySales');
  }
}

class DailyIncome {
  final String title;
  final String date;
  final double profit;

  DailyIncome({
    required this.title,
    required this.date,
    required this.profit,
  });

  factory DailyIncome.fromJson(Map<String, dynamic> json) {
    return DailyIncome(
      title: "Ganancias del día",
      date: json["date"],
      profit: json["profit"],
    );
  }
}
