export = {
  type: "mysql",
  port: "7201",
  username: "root",
  password: "password",
  database: "db",
  synchronize: false,
  logging: false,
  entities: ["src/db/entities/*.ts"],
  migrations: ["src/db/migrations/*.ts"],
  cli: {
    entitiesDir: "./src/db/entities",
    migrationsDir: "src/db/migrations",
  },
};