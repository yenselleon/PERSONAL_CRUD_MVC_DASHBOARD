<?php

    class Conectar{

        protected $dbh;

        protected function conexion(){

            try {
                //intentar conectar con la db en msql
                $conectar = $this-> dbh = new PDO("mysql:local=localhost;dbname=crud_udemy_php","root","");
                return $conectar;
            } catch (Exception $e) {
                print "¡Error DB!: ". $e -> getMessage() . "<br/>";
                //terminar conexion con la db
                die();
            }

        }

        //function para reconocer las ñ y tildes, ya se gestiono en la db colocando utf español sin embargo es solo para evitarlo
        public function set_names(){
            return $this-> dbh->query("SET NAMES 'utf8'");
        }

    }


?>