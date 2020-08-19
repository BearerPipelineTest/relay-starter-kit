/**
 * Knex.js database client and query builder for PostgreSQL.
 *
 * @see https://knexjs.org/
 * @copyright 2016-present Kriasoft (https://git.io/vMINh)
 */

import fs from "fs";
import knex from "knex";
import env from "./env";

const db = knex({
  client: "pg",

  connection: {
    ssl: env.PGSSLMODE === "verify-ca" && {
      cert: fs.readFileSync(env.PGSSLCERT, "ascii"),
      key: fs.readFileSync(env.PGSSLKEY, "ascii"),
      ca: fs.readFileSync(env.PGSSLROOTCERT, "ascii"),
      servername: ((x) => `${x[0]}:${x[2]}`)(env.GOOGLE_CLOUD_SQL.split(":")),
    },
  },

  // Note that the max connection pool size must be set to 1
  // in a serverless environment.
  pool: {
    min: env.APP_ENV === "production" ? 1 : 0,
    max: 1,
  },

  debug: env.PGDEBUG,
});

export default db;

// The TypeScript definitions below are automatically generated.
// Do not touch them, or risk, your modifications being lost.

export enum IdentityProvider {
  google = "google",
  apple = "apple",
  facebook = "facebook",
  github = "github",
  linkedin = "linkedin",
  microsoft = "microsoft",
  twitter = "twitter",
  yahoo = "yahoo",
  gamecenter = "gamecenter",
  playgames = "playgames",
}

export type CommentPoint = {
  comment_id: string;
  user_id: string;
};

export type Comment = {
  id: string;
  story_id: string;
  parent_id: string | null;
  author_id: string;
  text: string | null;
  created_at: Date;
  updated_at: Date;
};

export type Identity = {
  provider: IdentityProvider;
  id: string;
  user_id: string;
  username: string | null;
  email: string | null;
  email_verified: boolean | null;
  name: string | null;
  picture: string | null;
  given_name: string | null;
  family_name: string | null;
  locale: string | null;
  access_token: string | null;
  refresh_token: string | null;
  scopes: string[];
  token_type: string | null;
  created_at: Date;
  updated_at: Date;
  issued_at: Date | null;
  expires_at: Date | null;
};

export type Story = {
  id: string;
  author_id: string;
  slug: string;
  title: string;
  text: string | null;
  is_url: boolean;
  approved: boolean;
  created_at: Date;
  updated_at: Date;
};

export type StoryPoint = {
  story_id: string;
  user_id: string;
};

export type User = {
  id: string;
  username: string;
  email: string | null;
  email_verified: boolean;
  name: string | null;
  picture: string | null;
  given_name: string | null;
  family_name: string | null;
  time_zone: string | null;
  locale: string | null;
  admin: boolean;
  blocked: boolean;
  archived: boolean;
  created_at: Date;
  updated_at: Date;
  last_login: Date | null;
};