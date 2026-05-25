import React, {
  useEffect,
  useState,
} from "react";

import { supabase } from "../lib/supabase";

const MessageBoard = () => {

  const [nickname, setNickname] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  // 🌸 获取留言
  const fetchMessages = async () => {

    const { data, error } =
      await supabase
        .from("messages")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      console.log(error);
      return;
    }

    setMessages(data || []);
  };

  // 🌸 页面加载
  useEffect(() => {
    fetchMessages();
  }, []);

  // 🌸 提交留言
  const handleSubmit = async () => {

    if (!message.trim()) return;

    const { error } =
      await supabase
        .from("messages")
        .insert([
          {
            nickname:
              nickname.trim() ||
              "匿名",

            message,
          },
        ]);

    if (error) {
      console.log(error);
      return;
    }

    setNickname("");
    setMessage("");

    fetchMessages();
  };

  return (
    <div className="message-board" id="message-board">
      <h2 className="board-title">留言板</h2>

      <input
        type="text"
        placeholder="昵称（可不填）"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
      />

      <textarea
        placeholder="留下你的话..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit}>发送留言</button>

      <div className="message-list">
        {messages.length === 0 && (
          <p
            style={{
              textAlign: "center",
              opacity: 0.6,
              marginTop: "20px"
            }}
          >
            还没有留言～
          </p>
        )}

        {messages.map(item => (
          <div key={item.id} className="message-item">
            <div className="message-header">
              <span>{item.nickname}</span>

              <span>{new Date(item.created_at).toLocaleString()}</span>
            </div>

            <div>{item.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
//this is supabase messages