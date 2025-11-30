import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DimensionDetail {
  name: string;
  score: number;
  weight: number;
  dataFrom: string;
  calculation: string;
  rawData: any;
}

interface DetailsModalProps {
  property: {
    id: number;
    name: string;
  };
  details: {
    dimensions: DimensionDetail[];
    overallScore: number;
    badge: string;
    weights: Record<string, number>;
  };
  onClose: () => void;
  open: boolean;
}

const DetailsModal = ({ property, details, onClose, open }: DetailsModalProps) => {
  const getBadgeColor = () => {
    const { badge } = details;
    if (badge.includes("Diamond")) return "bg-diamond text-white";
    if (badge.includes("Gold")) return "bg-gold text-foreground";
    if (badge.includes("Silver")) return "bg-silver text-foreground";
    return "bg-bronze text-white";
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-diamond";
    if (score >= 80) return "text-gold";
    if (score >= 70) return "text-silver";
    if (score >= 60) return "text-bronze";
    return "text-destructive";
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            <span>{property.name} - Accessibility Report</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-secondary/50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Overall Accessibility Score</p>
                <p className="text-5xl font-bold text-primary">{details.overallScore}<span className="text-2xl text-muted-foreground">/100</span></p>
              </div>
              <Badge className={`${getBadgeColor()} text-lg px-4 py-2`}>
                {details.badge}
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Dimension Breakdown</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Each dimension is weighted and adjusted based on real-time data, complaints, and operational metrics.
            </p>

            <Accordion type="single" collapsible className="space-y-2">
              {details.dimensions.map((dimension, idx) => (
                <AccordionItem key={idx} value={`dimension-${idx}`} className="border rounded-lg">
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-4">
                      <span className="font-semibold">{dimension.name}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          Weight: {(dimension.weight * 100).toFixed(0)}%
                        </Badge>
                        <span className={`text-2xl font-bold ${getScoreColor(dimension.score)}`}>
                          {dimension.score.toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-muted-foreground mb-1">Data Sources:</p>
                        <p className="text-card-foreground">{dimension.dataFrom}</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground mb-1">Calculation Method:</p>
                        <p className="font-mono text-xs bg-muted p-2 rounded">{dimension.calculation}</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground mb-1">Raw Data:</p>
                        <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                          {JSON.stringify(dimension.rawData, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-info/10 border border-info/20 rounded-lg p-4">
            <h4 className="font-semibold text-info mb-2">About the Scoring System</h4>
            <p className="text-sm text-card-foreground">
              The Dynamic Accessibility Score adapts in real-time based on IoT sensors, user complaints, maintenance logs, and operational data. 
              Weights adjust automatically when critical issues are detected (e.g., lift failures increase reliability weight).
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
