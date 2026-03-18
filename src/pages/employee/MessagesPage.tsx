import { useState } from "react";
import { toast } from "sonner";
import { Send, Reply, AlertTriangle, Bell, CheckCircle, XCircle, Mail } from "lucide-react";
import { messages as initialMessages, allStaff } from "@/data/mockData";
import type { Message } from "@/types";

const typeIcons: Record<string, typeof Bell> = {
  reminder: Bell,
  strike: AlertTriangle,
  warning: AlertTriangle,
  absence_approved: CheckCircle,
  absence_rejected: XCircle,
  general: Mail,
};

const MessagesPage = () => {
  const [tab, setTab] = useState<"inbox" | "compose">("inbox");
  const [msgs, setMsgs] = useState<Message[]>(initialMessages);
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState("");

  // Compose state
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [searchResults, setSearchResults] = useState(allStaff);
  const [showSearch, setShowSearch] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSearch = (query: string) => {
    setReceiver(query);
    setShowSearch(query.length > 0);
    setSearchResults(
      allStaff.filter(
        (s) =>
          s.discordUsername.toLowerCase().includes(query.toLowerCase()) ||
          s.robloxUsername.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleSend = () => {
    if (!receiver || !subject || !body) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent");
      setReceiver("");
      setSubject("");
      setBody("");
      setTab("inbox");
    }, 1000);
  };

  const handleReply = () => {
    if (!replyText.trim() || !selectedMsg) return;
    toast.success("Reply sent");
    setReplyText("");
    setSelectedMsg(null);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      {/* Tabs */}
      <div className="inline-flex bg-muted rounded-lg p-1 mb-6">
        {(["inbox", "compose"] as const).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setSelectedMsg(null); }}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition-all capitalize ${
              tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "inbox" && !selectedMsg && (
        <div className="space-y-2">
          {msgs.map((msg) => {
            const Icon = typeIcons[msg.type || "general"];
            return (
              <button
                key={msg.id}
                onClick={() => {
                  setSelectedMsg(msg);
                  setMsgs((prev) => prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m)));
                }}
                className={`w-full text-left bg-card rounded-xl shadow-sas border p-4 transition-all hover:shadow-sas-hover flex items-start gap-4 ${
                  !msg.read ? "border-primary/30" : "border-border"
                }`}
              >
                {msg.isSystem && (
                  <div className="w-1 self-stretch rounded-full bg-primary shrink-0" />
                )}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.isSystem ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{msg.from}</span>
                      {msg.isSystem && (
                        <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">System</span>
                      )}
                      {!msg.read && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {new Date(msg.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <p className="text-sm font-medium mt-0.5">{msg.subject}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{msg.body}</p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {tab === "inbox" && selectedMsg && (
        <div className="bg-card rounded-xl shadow-sas border border-border p-6">
          <button
            onClick={() => setSelectedMsg(null)}
            className="text-sm text-primary font-medium mb-4 hover:underline"
          >
            ← Back to Inbox
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold">{selectedMsg.from}</span>
            {selectedMsg.isSystem && (
              <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">System</span>
            )}
          </div>
          <h2 className="text-xl font-bold mb-1">{selectedMsg.subject}</h2>
          <p className="text-xs text-muted-foreground mb-4">
            {new Date(selectedMsg.date).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
          <p className="text-sm leading-relaxed mb-6">{selectedMsg.body}</p>

          {!selectedMsg.isSystem && (
            <div>
              <label className="block text-sm font-medium mb-1.5">Reply</label>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply..."
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-ring mb-3"
              />
              <button
                onClick={handleReply}
                disabled={!replyText.trim()}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Reply className="w-4 h-4" /> Send Reply
              </button>
            </div>
          )}
        </div>
      )}

      {tab === "compose" && (
        <div className="bg-card rounded-xl shadow-sas border border-border p-6">
          <h2 className="text-lg font-bold mb-4">Compose Message</h2>

          {/* Receiver */}
          <div className="relative mb-4">
            <label className="block text-sm font-medium mb-1.5">Receiver</label>
            <input
              value={receiver}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => receiver && setShowSearch(true)}
              placeholder="Search by Discord or Roblox username..."
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {showSearch && searchResults.length > 0 && (
              <>
                <div className="fixed inset-0" onClick={() => setShowSearch(false)} />
                <div className="absolute left-0 right-0 top-full mt-1 bg-card rounded-lg shadow-sas border border-border py-1 z-50 max-h-[200px] overflow-auto">
                  {searchResults.map((s) => (
                    <button
                      key={s.discordUsername}
                      onClick={() => {
                        setReceiver(s.discordUsername);
                        setShowSearch(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors"
                    >
                      <span className="font-medium">{s.discordUsername}</span>
                      <span className="text-muted-foreground"> (@{s.robloxUsername})</span>
                      <span className="text-xs text-muted-foreground ml-2">· {s.role}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Message subject..."
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Body */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            onClick={handleSend}
            disabled={!receiver || !subject || !body || sending}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 active:scale-[0.98]"
          >
            {sending ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Message
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default MessagesPage;
