'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import { Card, CardContent } from '@/components/ui/Card';
import { FiCheck, FiAlertTriangle } from 'react-icons/fi';

export function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormStatus('loading');

      // Simuler un envoi de formulaire
      setTimeout(() => {
        // Normalement, vous feriez une requête API ici
        // Si le formulaire est bien rempli, on simule une réussite
        if (formData.name && formData.email && formData.message) {
          setFormStatus('success');
          // Réinitialiser le formulaire après 3 secondes
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            setFormStatus('idle');
          }, 3000);
        } else {
          setFormStatus('error');
        }
      }, 1000);
    };

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Une question ? Une opportunité de partenariat ?</h2>
            <p className="section-subheading">
                Nous sommes à votre disposition pour répondre à toutes vos questions et discuter de potentielles collaborations.
            </p>
          </div>

          <div className="mt-12">
            <Card className="overflow-hidden">
              <CardContent className="p-6 md:p-8">
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                      <FiCheck className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-mining-dark dark:text-mining-light">
                        Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Input
                        label="Nom"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                      <Input
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Input
                      label="Sujet"
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                    />

                    <TextArea
                      label="Message"
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    {formStatus === 'error' && (
                      <div className="flex items-center rounded-md bg-red-50 p-4 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                        <FiAlertTriangle className="mr-2 h-5 w-5" />
                        <span>Une erreur s&apos;est produite lors de l&apos;envoi de votre message. Veuillez réessayer.</span>
                      </div>
                    )}

                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        className="px-8"
                      >
                        {formStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    );
  }