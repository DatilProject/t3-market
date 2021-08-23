import 'package:admin/models/SalesPerCategory.dart';
import 'package:flutter/material.dart';

import '../../../constants.dart';
import 'chart.dart';
import 'storage_info_card.dart';

class StarageDetails extends StatelessWidget {
  const StarageDetails({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            "Ventas por Categoría",
            style: Theme.of(context).textTheme.subtitle1,
          ),
        ],
      ),
      SizedBox(height: defaultPadding),
      Container(
        padding: EdgeInsets.all(defaultPadding),
        decoration: BoxDecoration(
          color: secondaryColor,
          borderRadius: const BorderRadius.all(Radius.circular(10)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(height: defaultPadding),
            Chart(),
            StorageInfoCard(
              title: "Inmuebles",
              amountOfFiles: "\$60",
              numOfFiles: 60,
            ),
            StorageInfoCard(
              title: "Tecnología",
              amountOfFiles: "\$2750.127",
              numOfFiles: 2750.127,
            )
          ],
        ),
      )
    ]);
  }
}
