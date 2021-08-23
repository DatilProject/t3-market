// import 'package:admin/constants.dart';
// import 'package:flutter/material.dart';

class DailyInfo {
  final String? title, date;
  final double? money, percentage;
  final int? quantity;

  DailyInfo(
      {this.title, this.money, this.percentage, this.date, this.quantity});
}

List dailyInfo = [
  DailyInfo(
    title: "Ventas del día",
    percentage: 15,
    date: "07-08-2021",
    money: 530.85,
  ),
  DailyInfo(
    title: "Ganancias del día",
    percentage: 10,
    date: "07-08-2021",
    money: 130.91,
  ),
  DailyInfo(
    title: "Órdenes del día",
    percentage: 7,
    date: "07-08-2021",
    quantity: 18,
  ),
];
