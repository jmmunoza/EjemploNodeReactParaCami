import mysql from "mysql";

export class MySQLConnection {
  private static instance: MySQLConnection;
  private static database: mysql.Connection;

  public static getInstance(): MySQLConnection {
    if (!MySQLConnection.instance) {
      MySQLConnection.instance = new MySQLConnection();
    }

    return MySQLConnection.instance;
  }

  private constructor() {
    this.connect();
  }

  public connect(): Promise<any> {
    if (MySQLConnection.database) return Promise.resolve(true);

    this.getDatabase();

    return new Promise((resolve, reject) => {
      MySQLConnection.database.connect((err) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        console.log("¡Database Connected!");
        resolve(MySQLConnection.database);
      });
    });
  }

  public disconnect(): Promise<any> {
    if (MySQLConnection.database) {
      return new Promise((resolve, reject) => {
        MySQLConnection.database.end((err) => {
          if (err) {
            console.log(err);
            reject(err);
          }

          console.log("¡Database Disconnected!");
          resolve(true);
        });
      });
    }

    return Promise.resolve(true);
  }

  public getDatabase(): mysql.Connection {
    if (!MySQLConnection.database) {
      MySQLConnection.database = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER_DB,
        password: process.env.PASSWORD,
        port: parseInt(process.env.PORT_DB || "3306"),
        database: process.env.DATA_BASE,
      });
    }

    return MySQLConnection.database;
  }

  public async query(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      MySQLConnection.database.query(query, (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        
        resolve(result);
      });
    });
  }
}
