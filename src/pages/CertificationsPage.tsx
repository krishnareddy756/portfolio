import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";

export function CertificationsPage() {
  return (
    <div className="min-h-fit bg-[var(--bg)] text-[var(--fg)]">
      <SectionHeader
        title="Certifications & Education"
        aside={
          <span className="font-mono text-[10px] text-[var(--muted)]">
            ACADEMIC & PROFESSIONAL CREDENTIALS
          </span>
        }
      />

      <Shell className="px-6 py-6 sm:px-8 sm:py-8">
        <p className="mb-8 text-sm text-[var(--muted)] leading-relaxed">
          Official industry certifications, cloud accreditations, and formal academic background in Computer Science & Engineering.
        </p>

        {/* Certifications Section */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-[var(--accent)]" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--fg)]">
              Professional Certifications
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {site.certifications.map((cert) => (
              <div
                key={cert.name}
                className="group relative rounded-lg border border-[var(--line)] bg-[var(--card)] p-4 transition-all duration-200 hover:border-[var(--line-active)] hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[var(--accent)]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                        {cert.issuer}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {cert.name}
                    </h3>
                  </div>
                  {cert.year && (
                    <span className="shrink-0 font-mono text-[10px] text-[var(--muted)] border border-[var(--line)] px-1.5 py-0.5 rounded">
                      {cert.year}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-[var(--accent)]" />
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--fg)]">
              Formal Education
            </h2>
          </div>

          <div className="space-y-4">
            {site.education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-5 transition-all duration-200 hover:border-[var(--line-active)]"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--fg)]">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </span>
                    {edu.location && (
                      <span className="hidden sm:flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-block rounded border border-[var(--line)] bg-[var(--chip)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--accent)]">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Shell>
    </div>
  );
}

