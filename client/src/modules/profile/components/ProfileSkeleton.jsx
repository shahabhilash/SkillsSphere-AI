// Skeleton placeholder for profile sections — matches all-sections-visible layout

const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse pt-24">
      {/* Banner Skeleton */}
      <div className="h-44 sm:h-36 bg-gray-200 dark:bg-slate-700" />

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 -mt-10">
        
        {/* Sidebar — Single Consolidated Card */}
        <aside>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden">
            {/* Avatar + Name + Role */}
            <div className="p-5 flex flex-col items-center">
              <div className="h-32 w-32 rounded-full bg-gray-200 dark:bg-slate-700 mb-3" />
              <div className="h-5 w-36 bg-gray-200 dark:bg-slate-700 rounded mx-auto mb-2" />
              <div className="h-3 w-44 bg-gray-100 dark:bg-slate-800 rounded mx-auto mb-3" />
              <div className="h-6 w-20 bg-gray-100 dark:bg-slate-800 rounded-full mx-auto" />
            </div>

            <div className="border-t border-gray-100 dark:border-white/5" />

            {/* Contact Info */}
            <div className="px-5 py-4">
              <div className="h-3 w-20 bg-gray-200 dark:bg-slate-700 rounded mb-3" />
              <div className="flex flex-col gap-2.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="h-4 w-4 bg-gray-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-32 bg-gray-100 dark:bg-slate-800 rounded" />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-white/5" />

            {/* Activity */}
            <div className="px-5 py-4">
              <div className="h-3 w-16 bg-gray-200 dark:bg-slate-700 rounded mb-3" />
              <div className="grid grid-cols-2 gap-2.5">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-3 text-center border border-gray-100 dark:border-white/5">
                    <div className="h-5 w-8 bg-gray-200 dark:bg-slate-700 rounded mx-auto mb-1" />
                    <div className="h-3 w-14 bg-gray-100 dark:bg-slate-800 rounded mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column — All Sections */}
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
            <div className="h-5 w-28 bg-gray-200 dark:bg-slate-700 rounded" />
            <div className="h-9 w-28 bg-gray-200 dark:bg-slate-700 rounded-lg" />
          </div>

          {/* Basic Information Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded mb-5" />
            <div className="flex flex-col divide-y divide-gray-100 dark:divide-white/5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3 py-3.5">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-slate-700 rounded mt-0.5" />
                  <div className="flex-1">
                    <div className="h-3 w-16 bg-gray-100 dark:bg-slate-800 rounded mb-1.5" />
                    <div className="h-4 w-40 bg-gray-200 dark:bg-slate-700 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Details Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <div className="h-4 w-28 bg-gray-200 dark:bg-slate-700 rounded mb-5" />
            <div className="flex flex-col divide-y divide-gray-100 dark:divide-white/5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3 py-3.5">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-slate-700 rounded mt-0.5" />
                  <div className="flex-1">
                    <div className="h-3 w-20 bg-gray-100 dark:bg-slate-800 rounded mb-1.5" />
                    <div className="h-4 w-48 bg-gray-200 dark:bg-slate-700 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm p-6">
            <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded mb-5" />
            <div className="h-14 w-full bg-gray-100 dark:bg-slate-800 rounded-xl" />
          </div>

          {/* Danger Zone Card */}
          <div className="bg-red-50/60 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-500/20 p-6">
            <div className="h-3 w-24 bg-red-200 dark:bg-red-900/40 rounded mb-2" />
            <div className="h-3 w-64 bg-red-100 dark:bg-red-900/20 rounded mb-4" />
            <div className="h-9 w-32 bg-red-200 dark:bg-red-900/40 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
