import { FileText } from "lucide-react";

const DocumentsPage = () => (
  <div className="max-w-4xl">
    <h1 className="text-3xl font-bold mb-6">Documents</h1>
    <div className="bg-card rounded-xl shadow-sas border border-border p-12 text-center">
      <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
      <p className="text-muted-foreground">No documents available yet.</p>
      <p className="text-sm text-muted-foreground mt-1">Documents will appear here when uploaded by management.</p>
    </div>
  </div>
);

export default DocumentsPage;
