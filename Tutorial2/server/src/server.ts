import express from "express";
import socketIo from "socket.io";
import { ChatEvents } from "./constants";
import { ChatMessage } from "./types";
import http from "http";
const cors = require("cors");

export class ChatServer {
  public readonly PORT: number = 5001;

  private _app: express.Application;
}
