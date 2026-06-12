import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;

// To compile in Windows use:       javac -cp sqlite-jdbc-3.23.1.jar:. *.java
// To execute(run) in Windows use:  java -cp sqlite-jdbc-3.23.1.jar:. Main

/*
To communicate with DB server: In browser, append route name to the Port forwarded address
(ctrl + click link in Codespace Port tab)
OR 
In the browser address bar, type in http:// followed by your IP address, then a colon and the port #, followed by the route name
For e.g., http://192.168.0.100:8500/route_name
*/
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }

  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{   

    // Create a port - this is your Gateway
    int port = 8500;

    // Create the HTTPserver object
    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    // Create the database object
    Database db = new Database("jdbc:sqlite:marvel_rivals_database.db");
    
    // Create a route handler to respond to the request (default route)
    server.createContext("/", new RouteHandler("Default route...") );

    // create a route called 'customers' that gets all customer records.
    String sql = "";
    sql  = " Select * from rivals1 ";
    server.createContext("/character", new RouteHandler(db,sql) );

    // Create a route called 'employees' that gets all employee records.
    sql  = " Select * from rivals2 ";
    server.createContext("/ultimates", new RouteHandler(db,sql) ) ;
        
    
     // Start the server      
    server.start();
    System.out.println("Server is listening on port " + port);      
  }    
}


