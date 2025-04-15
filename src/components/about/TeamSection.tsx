import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import teamData from '@/data/team.json';
import { Team } from '@/types/Team';
import {TeamMemberCard} from './TeamMemberCard';

export function TeamSection() {
    const [team, setTeam] = useState<Team | null>(null);

    useEffect(() => {
      setTeam(teamData as Team);
    }, []);

    if (!team) return null;

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Notre équipe dirigeante</h2>
            <p className="section-subheading">
                Des professionnels expérimentés guident notre entreprise vers l&apos;excellence.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                Équipe de direction
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.management.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {team.board && team.board.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                Conseil d&apos;administration
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.board.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    );
  }
