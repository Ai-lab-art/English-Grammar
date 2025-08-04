import React, { useState, useEffect } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Edit, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContentEditorProps {
  topicId: string;
  sectionTitle: string;
  content: any;
  onSave?: () => void;
}

export function ContentEditor({ topicId, sectionTitle, content, onSave }: ContentEditorProps) {
  const { isAdmin, user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [loading, setSaving] = useState(false);

  useEffect(() => {
    setEditContent(content);
  }, [content]);

  if (!isAdmin) return null;

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('grammar_content')
        .upsert({
          topic_id: topicId,
          section_title: sectionTitle,
          content: editContent,
          updated_by: user?.id
        }, {
          onConflict: 'topic_id,section_title'
        });

      if (error) throw error;

      toast({
        title: "Content saved",
        description: "Your changes have been saved successfully.",
      });

      setIsEditing(false);
      onSave?.();
    } catch (error) {
      console.error('Error saving content:', error);
      toast({
        title: "Error",
        description: "Failed to save content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  return (
    <div className="relative">
      {!isEditing && (
        <Button
          variant="outline"
          size="sm"
          className="absolute top-2 right-2 z-10"
          onClick={() => setIsEditing(true)}
        >
          <Edit className="h-4 w-4" />
        </Button>
      )}

      {isEditing && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Edit {sectionTitle}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCancel}
                  disabled={loading}
                >
                  <X className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  disabled={loading}
                >
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={editContent.title || ''}
                onChange={(e) => setEditContent({
                  ...editContent,
                  title: e.target.value
                })}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editContent.description || ''}
                onChange={(e) => setEditContent({
                  ...editContent,
                  description: e.target.value
                })}
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="examples">Examples (JSON format)</Label>
              <Textarea
                id="examples"
                value={JSON.stringify(editContent.examples || [], null, 2)}
                onChange={(e) => {
                  try {
                    const examples = JSON.parse(e.target.value);
                    setEditContent({
                      ...editContent,
                      examples
                    });
                  } catch (error) {
                    // Invalid JSON, keep the text for user to fix
                  }
                }}
                rows={6}
                className="font-mono text-sm"
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
