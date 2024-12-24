const Logo = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 158 158" className={className}>
      <circle cx="78.5" cy="80.5" r="72.5" fill="#EFE1BE" />
      <path
        fill="#2C2725"
        d="M0 80.755v-3.072h9.54C14.572 36.935 37.047 14.475 77.244 9.6V0h3.073v10.062c18.678.832 34.448 7.394 47.351 20.308 12.943 12.952 19.487 28.8 20.279 47.313H158v3.072h-10.077c-.836 18.29-7.424 34.059-20.36 46.969-12.924 12.899-28.73 19.398-47.246 20.236V158h-3.073v-10.086c-18.26-.798-34.043-7.391-46.957-20.331-12.899-12.925-19.432-28.73-20.219-46.828H0Z"
      />
      <path
        fill="#EFE1BE"
        d="M0 73.295c.572-3.436 1.05-6.891 1.73-10.307C7.971 31.581 33.554 6.763 65.314 1.28 68.11.796 70.927.424 73.733 0h3.511v9.6C37.047 14.475 14.572 36.935 9.54 77.684H0v-4.39ZM84.706 0c3.509.583 7.035 1.074 10.523 1.763 31.607 6.241 57.099 33.096 61.804 65.067.339 2.298.646 4.602.967 6.904v3.95h-10.053c-.792-18.514-7.338-34.361-20.279-47.314-12.903-12.914-28.673-19.476-47.352-20.308V0h4.39ZM158 84.267c-.74 4.375-1.276 8.796-2.253 13.117-6.791 30.048-32.476 54.24-62.852 59.307-2.87.479-5.752.875-8.628 1.309h-3.95v-10.04c18.516-.838 34.322-7.337 47.246-20.236 12.936-12.91 19.524-28.678 20.36-46.968H158v3.51ZM73.733 158c-4.377-.74-8.802-1.268-13.124-2.253C29.392 148.626 4.833 121.499.832 89.864.595 87.994.279 86.132 0 84.267v-3.51h10.068c.787 18.097 7.32 33.901 20.219 46.826 12.914 12.94 28.697 19.533 46.957 20.331V158h-3.51Z"
      />
      <path
        fill="#EFE1BE"
        d="M80.635 144.629v-39.372c6.306-.557 12.37-1.957 17.956-5.122 7.066 7.049 14.184 13.977 21.052 21.142 1.365 1.426 1.904 3.719 2.562 5.699.203.609-.23 1.783-.764 2.235-11.557 9.773-24.94 14.913-40.053 15.573-.207.009-.419-.083-.753-.155ZM80.719 13.202c6.823.15 13.39 1.35 19.766 3.575a66.606 66.606 0 0 1 19.499 10.71c1.205.953 1.567 1.931 1.277 3.397-.582 2.94-1.74 5.542-3.892 7.682-5.856 5.824-11.717 11.644-17.51 17.532-.964.979-1.647 1.194-2.963.586-4.61-2.132-9.48-3.4-14.572-3.668-1.197-.063-1.845-.318-1.84-1.747.05-12.281.03-24.564.043-36.847 0-.352.108-.704.192-1.22ZM77.357 144.82c-10.239-.333-19.732-2.658-28.555-7.401-3.393-1.824-6.61-4.007-9.796-6.187-2.457-1.682-2.996-3.189-1.71-5.964 1.115-2.404 2.566-4.794 4.38-6.708 5.422-5.721 11.082-11.221 16.702-16.753.459-.451 1.507-.873 1.976-.656 5.239 2.436 10.759 3.645 16.479 4.105.133.011.258.116.524.243v39.321ZM59.523 56.809c-3.282-3.331-7.22-7.34-11.173-11.337-2.16-2.184-4.409-4.282-6.497-6.532-2.448-2.636-4.128-5.713-4.057-9.411.017-.947.57-2.207 1.301-2.77 10.986-8.453 23.45-12.913 37.292-13.54.282-.012.567.062.96.108.05.603.138 1.174.138 1.744.006 11.92-.02 23.84.03 35.76.007 1.521-.362 1.996-1.99 2.305-5.13.975-10.19 2.307-16.005 3.672ZM57.746 59.142c-3.348 2.214-6.443 4.268-9.542 6.312C42.592 69.158 37 72.89 31.34 76.52c-.92.591-2.134.978-3.224 1.002-4.882.105-9.769.045-15.35.045.832-5.09 1.366-9.928 2.45-14.639 1.92-8.36 5.662-15.938 10.738-22.857 3.19-4.35 7.528-4.939 11.464-1.145C44.206 45.47 50.8 52.212 57.746 59.142ZM144.751 77.549c-5.456 0-10.776.02-16.095-.032-.525-.004-1.095-.379-1.565-.698a11547.89 11547.89 0 0 1-24.855-16.87c-.351-.239-.649-.555-1.247-1.074 3.995-3.912 7.915-7.734 11.816-11.576 2.294-2.257 4.528-4.573 6.847-6.805.888-.855 1.865-1.657 2.917-2.295 4.538-2.748 6.355-2.393 9.435 1.804 7.684 10.47 11.883 22.214 12.74 35.16.048.712.007 1.43.007 2.386ZM57.078 99.136c-2.613 2.508-5.112 4.853-7.55 7.26-3.8 3.749-7.515 7.585-11.36 11.287a13.567 13.567 0 0 1-3.758 2.549c-4.406 1.989-5.58 1.607-8.413-2.245-7.604-10.344-11.761-21.948-12.723-34.723a26.567 26.567 0 0 1-.06-1.753c-.001-.208.064-.416.153-.951 3.531 0 7.107.25 10.633-.065 4.192-.376 7.554.933 10.906 3.364 6.566 4.76 13.375 9.182 20.08 13.75.594.406 1.163.847 2.092 1.527ZM101.154 98.344c5.198-3.433 10.119-6.685 15.042-9.933 3.473-2.292 6.941-4.594 10.436-6.855.654-.424 1.422-.94 2.145-.951 5.248-.08 10.497-.043 16.273-.043-.514 3.892-.829 7.573-1.512 11.185-1.973 10.451-6.426 19.785-12.962 28.168-.974 1.248-2.02 1.727-3.354 1.169-2.132-.89-4.585-1.552-6.188-3.066-6.686-6.319-13.105-12.92-19.88-19.674Z"
      />
      <path
        fill="#EFE1BE"
        fillRule="evenodd"
        d="M79.996 74.003a7.002 7.002 0 0 1 9.035-6.701 1 1 0 0 1 .417 1.664l-4.427 4.426a2.998 2.998 0 0 0 2.588 2.586l4.425-4.426a1.001 1.001 0 0 1 1.664.417 7.001 7.001 0 0 1-7.297 9.01c-1.358-.115-2.494.133-3.08.846l-9.534 11.582a4.4 4.4 0 0 1-7.782-3.01 4.397 4.397 0 0 1 1.588-3.182l11.581-9.537c.71-.586.96-1.721.846-3.079a7.145 7.145 0 0 1-.024-.596ZM69.483 90.506a1 1 0 0 1 1-1h.01a1 1 0 0 1 1.001 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1.001-1v-.01Z"
        clipRule="evenodd"
      />
      <path
        fill="#EFE1BE"
        d="m77.43 76.523-2.935-2.933V71.5a1 1 0 0 0-.486-.857l-5-3a1 1 0 0 0-1.222.15l-1 1a1 1 0 0 0-.151 1.222l3 5a.998.998 0 0 0 .858.486h2.086l2.75 2.75 2.1-1.73v.001Z"
      />
      <path
        fill="#EFE1BE"
        fillRule="evenodd"
        d="m80.737 88.111 5.578 5.577a4.5 4.5 0 0 0 6.365-6.365l-4.408-4.408a9.072 9.072 0 0 1-2.04.058c-.526-.046-.91-.008-1.157.056a.785.785 0 0 0-.222.084l-4.116 4.998Zm4.553-1.814a1 1 0 0 1 1.413 0l2.5 2.502a1 1 0 1 1-1.413 1.414l-2.5-2.5a1 1 0 0 1 0-1.414v-.002Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Logo
