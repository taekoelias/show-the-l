export interface ProgressBarProps {
    label: string,
    percentage: string
}

export const ProgressBar = ({label, percentage}: ProgressBarProps) => {
    return (
        <>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700">{label}</span>
              <span className="text-sm font-medium text-blue-700">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${percentage.split(',')[0]}%`}}></div>
            </div>
        </>
    )
}
