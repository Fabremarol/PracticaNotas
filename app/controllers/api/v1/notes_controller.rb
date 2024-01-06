class Api::V1::NotesController < ApplicationController
  before_action :set_note, only: %i[ show update destroy ]

  # GET /notes
  def index
    @notes = Note.all

    render json: @notes
  end

  # GET /notes/1
  def show
    @note = Note.find_by(id: params[:id])

    if @note
      render json: @note, status: 200
    else
      render json: {
        error: "Nota no encontrada..."
      }
    end
  end

  # POST /notes
  def create
    @note = Note.new(
      title: note_params[:title],
      message: note_params[:message]
    )

    if @note.save
      render json: @note, status: 200
    else
      render json: {
        error: "Error creando la nota..."
      }
    end
  end

  # PATCH/PUT /notes/1
  def update
    @note = Note.find_by(id: params[:id])
    if @note.update(title: params[:title], message: params[:message])
      render json: "Nota editada correctamente!"
    else
      render json: {
        error: "Nota no encontrada..."
      }
    end
  end

  # DELETE /notes/1
  def destroy
    @note = Note.find_by(id: params[:id])
    if @note.destroy
      render json: "Nota eliminada correctamente!"
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:title, :message)
    end
end
