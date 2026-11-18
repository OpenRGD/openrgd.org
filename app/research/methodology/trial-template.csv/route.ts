export const dynamic='force-static'
export async function GET(){
  const csv="study_id,protocol_version,run_id,trial_id,condition_id,randomization_seed,start_utc,primary_value,primary_unit,success,abort,failure_code,missing_data,exclusion_reason,source_commit,calibration_sha256,artifact_ref,notes\n"
  return new Response(csv,{headers:{
    'Content-Type':'text/csv; charset=utf-8',
    'Content-Disposition':'attachment; filename="openrgd-trial-template.csv"',
    'Cache-Control':'public, max-age=300, s-maxage=3600',
    'X-Robots-Tag':'noindex, follow',
  }})
}
