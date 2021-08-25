import 'dart:convert';
import 'package:admin/components/bezierContainer.dart';
import 'package:admin/constants.dart';
import 'package:admin/screens/main/main_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:admin/controllers/MenuController.dart';
import 'package:admin/screens/LogIn/Form.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  var _isLoading = false;
  var errorMessage;
  int id = 0;

  _validateAccount(String mail, String password, BuildContext ctx) async {
    try {
      setState(() {
        _isLoading = true;
      });

      final response = await http.post(
        Uri.parse('http://206.81.3.107:3000/auth/commerce'),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode(<String, String>{
          'email': mail,
          'password': password,
        }),
      );
      print(response.statusCode);
      if (response.statusCode == 200) {
        var json = jsonDecode(response.body);
        setState(() {
          id = json['user']['commerce']['id'];
        });

        setState(() {
          _isLoading = false;
        });

        Navigator.push(ctx, MaterialPageRoute(builder: (context) =>
            MultiProvider(
              providers: [
                ChangeNotifierProvider(
                  create: (context) => MenuController(),
                ),
              ],
              child: MainScreen(id: this.id,),
            )));
      }else{
        throw Exception("Contraseña o usuario incorrecto.");
      }

    } on PlatformException catch (err) {
      var message = 'An error occurred, please check your credentials!';

      if (err.message != null) {
        message = err.message!;
        setState(() {
          errorMessage = message;
        });
        print(message);
      }
      showDialog(
          context: ctx,
          barrierDismissible: false,
          builder: (BuildContext context) {
            return AlertDialog(
                title: Text("Error de inicio de sesión"),
                content: Text(errorMessage),
                actions: <Widget>[
                  TextButton(
                    child: Text('ACEPTAR'),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  )
                ]);
          });
      setState(() {
        _isLoading = false;
      });
    }on Exception catch (error) {
      print(error);
      setState(() {
        errorMessage = error.toString();
      });

      setState(() {
        _isLoading = false;
      });

      showDialog(
          context: ctx,
          barrierDismissible: false,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text("Error de inicio de sesión"),
              content: Text(errorMessage),
              actions: <Widget>[
                TextButton(
                  child: Text('ACEPTAR'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                )
              ]);
        });

    }
  }

  Widget _title() {
    return RichText(
      textAlign: TextAlign.center,
      text: TextSpan(
          text: 'Admin',
          style: GoogleFonts.portLligatSans(
            textStyle: Theme.of(context).textTheme.bodyText1,
            fontSize: 30,
            fontWeight: FontWeight.w700,
            color: primaryColor,
          ),
          children: [
            TextSpan(
              text: 'Panel',
              style: TextStyle(color: Colors.black, fontSize: 30),
            ),
          ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    return Scaffold(
        body: Container(
      height: height,
      child: Stack(
        children: <Widget>[
          Positioned(
              top: -height * .15,
              right: -MediaQuery.of(context).size.width * .4,
              child: BezierContainer()),
          Container(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  SizedBox(height: height * .2),
                  _title(),
                  SizedBox(height: 50),
                  LoginForm(_validateAccount, _isLoading),
                ],
              ),
            ),
          ),
        ],
      ),
    ));
  }
}
