import { SUPPORTED_IMAGE_FORMATS } from "../../types/components/common/FileUpload";
import { IImageUploadProps } from "../../types/components/common/ImageUpload";

export default function ImageUpload({
  label,
  errors,
  photo,
  handleFileChange,
}: IImageUploadProps) {
  return (
    <div className="input-block">
      <label>{label}</label>
      <div>
        <div className="flex gap-4">
          <input
            className="h-fit"
            type="file"
            accept={SUPPORTED_IMAGE_FORMATS.join(",")}
            onChange={handleFileChange}
          />

          {photo && (
            <div className="bg-slate-100 rounded-lg p-4">
              <img src={photo} alt="Employee" className="size-[100px]" />
            </div>
          )}
        </div>

        <div>
          {errors.photo && (
            <p className="error">{errors.photo.message?.toString()}</p>
          )}
        </div>
      </div>
    </div>
  );
}
