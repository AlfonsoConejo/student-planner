import FeatureBadge from "./FeatureBadge"

export default function FeatureCard({ title, description, status }) {
  return(
    <div className="rounded-2xl p-6 shadow-md border border-slate-200 border-slate-900 bg-slate-800">
      <FeatureBadge status={status} />
      <h3 className="text-xl text-white font-semibold mt-3">{title}</h3>
      <p className="text-slate-400 text-sm mt-1">{description}</p>
    </div>
  )
}