import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:admin/constants.dart' as constants;

Future<List<SalesPerCategory>> fetchSalesPerCategory() async {
  final response =
      await http.get(Uri.parse(constants.salesPerCategoryEndPoint));

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return json.decode(response.body);
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to fetch SalesPerCategory');
  }
}

class SalesPerCategory {
  final String name;
  final double sales;

  SalesPerCategory({
    required this.name,
    required this.sales,
  });

  factory SalesPerCategory.fromJson(Map<String, dynamic> json) {
    return SalesPerCategory(
      name: json["name"],
      sales: json["sales"],
    );
  }
}

Future getSalesPerCategoryList() async {
  List<SalesPerCategory> projetcList = await fetchSalesPerCategory();
  return projetcList;
}
