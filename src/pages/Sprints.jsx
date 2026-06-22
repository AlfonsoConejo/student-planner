// pages/SprintsPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import allSprints from '../data/sprints';

export default function Sprints() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            📅 Todos los Sprints de Kitab
          </h1>
          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-white border border-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            ← Volver al landing
          </Link>
        </div>

        {/* Progreso actual */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-400">Estado actual</p>
              <p className="text-lg font-semibold text-white">
                Sprint v0.4 completado ✅
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Próximo sprint</p>
              <p className="text-lg font-semibold text-blue-400">
                v0.5 — 3 de julio · Integración con Google Calendar
              </p>
            </div>
          </div>
        </div>

        {/* Línea de tiempo */}
        <div className="space-y-4">
          {allSprints.map((sprint, index) => (
            <div
              key={sprint.version}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />
                    {index < allSprints.length - 1 && (
                      <div className="w-0.5 h-8 bg-gray-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                        {sprint.version}
                      </span>
                      <span className="text-sm text-gray-400">
                        {sprint.date}
                      </span>
                      <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-0.5 rounded-full">
                        {sprint.duration}
                      </span>
                      <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-0.5 rounded-full">
                        {sprint.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-1">{sprint.description}</p>
                  </div>
                </div>
                <a
                  href={sprint.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium border border-blue-400/30 hover:border-blue-400/60 px-4 py-2 rounded-lg transition-colors text-center"
                >
                  ▶️ Ver video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};