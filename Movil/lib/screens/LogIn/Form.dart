import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_vector_icons/flutter_vector_icons.dart';
import 'package:admin/constants.dart';

class LoginForm extends StatefulWidget {
  LoginForm(
      this.submitFn,
      this.isLoading,
      );

  final bool isLoading;
  final void Function(
      String email,
      String password,
      BuildContext ctx,
      ) submitFn;
  @override
  _LoginFormState createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  var _userEmail = '';
  var _userPassword = '';
  bool hidePassword = true;

  void _trySubmit() {
    final isValid = _formKey.currentState!.validate();
    FocusScope.of(context).unfocus();

    if (isValid) {
      _formKey.currentState!.save();
      widget.submitFn(
        _userEmail.trim(),
        _userPassword.trim(),
        context
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    return Center(
      child: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(16),
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                SizedBox(
                  height: 0,
                ),
                Container(
                  width: width,
                  child: TextFormField(
                    key: ValueKey('email'),
                    validator: (value) {
                      if (value!.isEmpty || !value.contains('@')) {
                        return 'Entre un correo electrónico válido.';
                      }
                      return null;
                    },
                    keyboardType: TextInputType.emailAddress,
                    decoration: InputDecoration(
                        hintText: 'Correo Electrónico',
                        prefixIcon: Icon(Entypo.mail),
                    ),
                    onSaved: (value) {
                      _userEmail = value!;
                    },
                  ),
                ),
                SizedBox(height: 12),
                Container(
                  width: width,
                  child: TextFormField(
                    key: ValueKey('password'),
                    validator: (value) {
                      if (value!.isEmpty) {
                        return 'Ingrese la Contraseña.';
                      }
                      return null;
                    },
                    decoration: InputDecoration(
                        suffixIcon: IconButton(
                          icon: Icon(
                              hidePassword ? Entypo.eye_with_line : Entypo.eye),
                          onPressed: () {
                            setState(() {
                              hidePassword = !hidePassword;
                            });
                          },
                        ),
                        hintText: 'Contraseña',
                        prefixIcon: Icon(
                          Icons.vpn_key,
                        )),
                    obscureText: hidePassword,
                    onSaved: (value) {
                      _userPassword = value!;
                    },
                  ),
                ),
                SizedBox(height: 12),
                widget.isLoading
                    ? CircularProgressIndicator()
                    : InkWell(
                  onTap: _trySubmit,
                  child: Container(
                    height: 50,
                    decoration: BoxDecoration(
                      color: primaryColor,
                      borderRadius: BorderRadius.circular(5),
                    ),
                    width: width,
                    child: Center(
                        child: Text('Iniciar Sesión',
                          style: GoogleFonts.lato(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.w900,
                          ),
                        )),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}