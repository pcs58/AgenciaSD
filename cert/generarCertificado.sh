#!/bin/bash
openssl genrsa -out key.pem # genera clave privada
openssl req -new -key key.pem -out csr.pem # generado el certificado sin firmar y sin formato estandar
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem # generamos clave privada con el nueco certificado
rm csr.pem